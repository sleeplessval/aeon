#version 120

varying vec2 texcoord;
varying vec4 color;
varying vec2 lmcoord;

uniform mat4 gbufferModelView, gbufferModelViewInverse;
uniform float viewWidth, viewHeight;

#define pixelSize 2 // [1 2 4 8 16]
#define vWarp 0 // psx vertex warp [0 1 2 4 8 16 32]

void main() {
	texcoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
	lmcoord = (gl_TextureMatrix[1] * gl_MultiTexCoord1).xy;
	color = gl_Color;

	#ifdef vWarp
		float mod = pixelSize * vWarp;
		vec2 screen = vec2(viewWidth / mod, viewHeight / mod);
		vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
		vec2 nearest = round(position.xy / position.w * screen) / screen;
		position.xy = nearest;
		gl_Position = gl_ProjectionMatrix * gbufferModelView * position;
	#else
		gl_Position = ftransform();
	#endif
}

