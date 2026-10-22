/* Selected Nevel concept. Local flow deformation; the cloud never follows the cursor as an image. */
export function mountJohnMist(canvas, panel) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true, preserveDrawingBuffer: true, depth: false });
  if (!gl) return () => {};
  const vertex = `attribute vec2 position; varying vec2 uv;
    void main(){ uv=position; gl_Position=vec4(position,0.,1.); }`;
  const fragment = `precision highp float;
    varying vec2 uv; uniform float time, influence; uniform vec2 mouse, velocity;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
    float fbm(vec2 p){float v=0.,a=.5;mat2 m=mat2(.8,-.6,.6,.8);for(int i=0;i<4;i++){v+=a*noise(p);p=m*p*2.03+7.3;a*=.5;}return v;}
    void main(){
      vec2 p=uv*1.55;
      float t=time*.19;
      vec2 delta=p-mouse*1.55;
      float local=exp(-dot(delta,delta)*3.6)*influence;
      vec2 curl=vec2(-delta.y,delta.x);
      // The cloud's envelope stays anchored. Only the nearby flow field is disturbed.
      vec2 q=p+curl*local*.65+velocity*local*.15;
      q+=normalize(delta+vec2(.0001))*local*.08*sin(length(delta)*9.-t*2.);
      q.x+=.14*sin(t*.8+p.y*2.);
      q.y+=.08*cos(t*.9+p.x*2.1);
      vec2 w=vec2(fbm(q*2.2+vec2(t*.3,0.)),fbm(q*2.1+vec2(2.,-t*.24)))-.45;
      vec2 s=p+w*.58;
      float mass=exp(-dot(s*vec2(.85,1.3),s*vec2(.85,1.3))*2.9);
      mass+=exp(-dot((s-vec2(.58,.2))*vec2(1.4,2.),(s-vec2(.58,.2))*vec2(1.4,2.))*3.)*.45;
      float fog=fbm(q*4.+w*2.+vec2(-t*.4,t*.16));
      float wisps=fbm(q*9.+w*3.+vec2(-t*.45,t*.2));
      float alpha=mass*smoothstep(.21,.7,fog)*.85;
      vec3 color=mix(vec3(.12,.29,.51),vec3(.19,.43,.72),smoothstep(.2,.6,fog));
      color=mix(color,vec3(.30,.68,.86),smoothstep(.43,.75,wisps)*.7);
      alpha*=1.-smoothstep(.9,1.48,length(p));
      float a=clamp(alpha,0.,.88);
      gl_FragColor=vec4(color*a,a);
    }`;
  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };
  const vs = compile(gl.VERTEX_SHADER, vertex);
  const fs = compile(gl.FRAGMENT_SHADER, fragment);
  if (!vs || !fs) { if (vs) gl.deleteShader(vs); if (fs) gl.deleteShader(fs); return () => {}; }
  const program = gl.createProgram();
  gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteShader(vs); gl.deleteShader(fs); gl.deleteProgram(program); return () => {};
  }
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const timeUniform = gl.getUniformLocation(program, 'time');
  const mouseUniform = gl.getUniformLocation(program, 'mouse');
  const velocityUniform = gl.getUniformLocation(program, 'velocity');
  const influenceUniform = gl.getUniformLocation(program, 'influence');
  canvas.width = canvas.height = Math.min(432, Math.round(216 * Math.min(devicePixelRatio || 1, 2)));
  gl.viewport(0, 0, canvas.width, canvas.height);
  canvas.parentElement.classList.add('has-orb-render');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0, previous = 0, elapsed = 0, lastDraw = 0, disposed = false;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  let vx = 0, vy = 0, strength = 0, targetStrength = 0;
  const draw = () => {
    gl.uniform1f(timeUniform, elapsed + 3.5);
    gl.uniform2f(mouseUniform, x, y);
    gl.uniform2f(velocityUniform, vx, vy);
    gl.uniform1f(influenceUniform, strength);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };
  const visible = () => !document.hidden && panel.getAttribute('aria-hidden') === 'false' && canvas.isConnected;
  const tick = stamp => {
    if (disposed || !visible() || reduced.matches) { frame = 0; previous = 0; return; }
    if (stamp - lastDraw > 30) {
      const delta = previous ? Math.min((stamp - previous) / 1000, .08) : 0;
      elapsed += delta;
      const ease = 1 - Math.exp(-delta * 6);
      vx = (targetX - x) * 3.; vy = (targetY - y) * 3.;
      x += (targetX - x) * ease; y += (targetY - y) * ease;
      strength += (targetStrength - strength) * ease;
      previous = stamp; lastDraw = stamp; draw();
    }
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (disposed) return;
    if (visible() && !reduced.matches) {
      if (!frame) { previous = 0; frame = requestAnimationFrame(tick); }
    } else { cancelAnimationFrame(frame); frame = 0; previous = 0; draw(); }
  };
  const move = event => {
    if (reduced.matches || event.pointerType === 'touch') return;
    const rect = canvas.getBoundingClientRect();
    targetX = Math.max(-1.4, Math.min(1.4, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
    targetY = Math.max(-1.4, Math.min(1.4, -(event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
    targetStrength = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom ? 1 : 0;
  };
  const leave = () => { targetStrength = 0; };
  panel.addEventListener('pointermove', move, { passive: true });
  panel.addEventListener('pointerleave', leave);
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  const observer = new MutationObserver(sync);
  observer.observe(panel, { attributes: true, attributeFilter: ['aria-hidden'] });
  const contextLost = event => { event.preventDefault(); cancelAnimationFrame(frame); frame = 0; canvas.parentElement?.classList.remove('has-orb-render'); };
  canvas.addEventListener('webglcontextlost', contextLost);
  draw(); sync();
  return () => {
    disposed = true; cancelAnimationFrame(frame); observer.disconnect();
    panel.removeEventListener('pointermove', move); panel.removeEventListener('pointerleave', leave);
    document.removeEventListener('visibilitychange', sync); reduced.removeEventListener('change', sync);
    canvas.removeEventListener('webglcontextlost', contextLost);
    if (!gl.isContextLost()) { gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vs); gl.deleteShader(fs); }
  };
}
