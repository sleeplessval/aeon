#version 120

#include "/module/common.glsl"

#define worldCurvature 0 // [0 1 2]

varying vec2 texcoord;
varying vec4 color;
varying vec2 lmcoord;

uniform mat4 gbufferModelView, gbufferModelViewInverse;
uniform float viewWidth, viewHeight;

#include "/module/vertex_warp.vert"
#include "/module/texture_warp.vert"

void main() {
	texcoord = (gl_TextureMatrix[0] * gl_MultiTexCoord0).xy;
	lmcoord = (gl_TextureMatrix[1] * gl_MultiTexCoord1).xy;
	color = gl_Color;

	#if vWarp > 0
		vertex_warp();
	#else
		gl_Position = ftransform();
	#endif

	#ifdef tWarp
		texture_warp();
	#endif

	#ifndef NON_WORLD
		#include "/module/world.vert"
	#endif
}

