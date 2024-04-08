#version 120

varying vec2 texcoord;
varying vec4 color;

uniform mat4 gbufferModelView, gbufferModelViewInverse;
uniform float viewWidth, viewHeight;

#define pixelSize 2 // [1 2 4 8 16]
//#define vWarp // whether or not to warp vertices

void main() {
	texcoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
	color = gl_Color;

	#ifdef vWarp
		vec2 screen = vec2(viewWidth / pixelSize, viewHeight / pixelSize);
		vec4 position = gbufferModelViewInverse * gl_ModelViewMatrix * gl_Vertex;
		vec2 nearest = round(position.xy * screen) / screen;
		position.xy = nearest;
		//vec3 nearest = round(position.xyz * 100) / 100;
		//position.xyz = nearest;
		gl_Position = gl_ProjectionMatrix * gbufferModelView * position;
	#else
		gl_Position = ftransform();
	#endif
}

