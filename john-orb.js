/* Small, local WebGL welcome illustration. No requests, textures or dependencies. */
export function mountJohnOrb(canvas, panel) {
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false, depth: false });
  if (!gl) return () => {};
  const vertex = `attribute vec2 position; varying vec2 uv;
    void main(){ uv=position; gl_Position=vec4(position,0.,1.); }`;
  const fragment = `precision highp float;
    varying vec2 uv; uniform float time; uniform vec2 mouse;
    mat2 rot(float a){ return mat2(cos(a),-sin(a),sin(a),cos(a)); }
    void main(){
      vec2 p=uv*1.24;
      p-=mouse*.045;
      float r=length(p);
      float silhouette=1.-smoothstep(.985,1.005,r);
      float z=sqrt(max(0.,1.-r*r));
      vec3 n=vec3(p,z);
      n.xz=rot(mouse.x*.32+sin(time*.15)*.08)*n.xz;
      n.yz=rot(-mouse.y*.26+time*.065)*n.yz;
      n.xy=rot(-.48)*n.xy;
      float latitude=n.y+.28*sin(n.x*2.8+time*.24)+.18*sin(n.z*3.5-time*.18);
      float longitude=atan(n.x,n.z);
      float path=latitude+.22*sin(longitude*2.+time*.28);
      float band=exp(-pow((path-.15)*6.5,2.));
      float thread=exp(-abs(path-.34)*100.);
      float thread2=exp(-abs(path+.11)*95.);
      float fold=exp(-pow((path+.48)*20.,2.));
      float edge=pow(1.-z,3.);
      float light=max(0.,dot(normalize(vec3(-.6,.8,1.)),vec3(p,z)));
      float sweep=.5+.5*sin(longitude*2.4+time*.22);
      vec3 color=vec3(.015,.035,.105);
      color+=vec3(.01,.045,.17)*light;
      color+=band*mix(vec3(.045,.10,.48),vec3(.04,.60,.95),sweep)*(.24+.8*light);
      color+=thread*vec3(.35,.83,1.)*(.3+.7*light);
      color+=thread2*vec3(.14,.29,.85)*(.2+.6*light);
      color+=fold*vec3(.13,.12,.48)*(.5+.5*sweep);
      color+=edge*vec3(.05,.45,.92)*(.3+.7*light);
      color+=exp(-length(p-vec2(-.52,.64))*35.)*vec3(.30,.6,.9);
      float aura=exp(-max(0.,r-1.)*19.)*.15;
      vec3 outside=vec3(.12,.43,.82);
      gl_FragColor=vec4(mix(outside,color,silhouette),max(silhouette,aura));
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
  canvas.width = canvas.height = Math.min(432, Math.round(216 * Math.min(devicePixelRatio || 1, 2)));
  gl.viewport(0, 0, canvas.width, canvas.height);
  canvas.parentElement.classList.add('has-orb-render');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0, previous = 0, elapsed = 0, lastDraw = 0, disposed = false;
  let x = 0, y = 0, targetX = 0, targetY = 0;
  const draw = () => {
    gl.uniform1f(timeUniform, elapsed + 3.5);
    gl.uniform2f(mouseUniform, x, y);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };
  const visible = () => !document.hidden && panel.getAttribute('aria-hidden') === 'false' && canvas.isConnected;
  const tick = stamp => {
    if (disposed || !visible() || reduced.matches) { frame = 0; previous = 0; return; }
    if (stamp - lastDraw > 30) {
      const delta = previous ? Math.min((stamp - previous) / 1000, .08) : 0;
      elapsed += delta;
      const ease = 1 - Math.exp(-delta * 6);
      x += (targetX - x) * ease; y += (targetY - y) * ease;
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
    targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
    targetY = Math.max(-1, Math.min(1, -(event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
  };
  const leave = () => { targetX = 0; targetY = 0; };
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
