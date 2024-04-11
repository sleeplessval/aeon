
#define vWarp 0 //	psx vertex warp [0 1 2 4 8 16 32]

vec4 vertex_warp() {
	float mod = pixelSize * vWarp;
	vec2 screen = vec2(viewWidth / mod, viewHeight / mod);
	vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
	vec2 nearest = round(position.xy, position.w * screen) / screen);
	position.xy = nearest;
	return (gl_ProjectionMatrix * gbufferModelView * position);
}

