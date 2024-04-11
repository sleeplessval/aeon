#version 120

#define pixelSize 2 // [1 2 4 8 16]
#define vWarp 0 // psx vertex warp [0 1 2 4 8 16 32]
//#define tWarp // psx texture warp

varying vec2 texcoord;
varying vec4 color;
varying vec2 lmcoord;

uniform mat4 gbufferModelView, gbufferModelViewInverse;
uniform float viewWidth, viewHeight;

void main() {
	texcoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
	lmcoord = (gl_TextureMatrix[1] * gl_MultiTexCoord1).xy;
	color = gl_Color;

	#if vWarp > 0
		float mod = pixelSize * vWarp;
		vec2 screen = vec2(viewWidth / mod, viewHeight / mod);
		vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
		vec2 nearest = round(position.xy / position.w * screen) / screen;
		position.xy = nearest;
		gl_Position = gl_ProjectionMatrix * gbufferModelView * position;
	#else
		gl_Position = ftransform();
	#endif

	#ifdef tWarp
		gl_Position /= abs(gl_Position.w);
	#endif
}

