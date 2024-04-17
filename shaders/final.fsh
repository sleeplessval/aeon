#version 120

#define pixelSize // [1 2 4 8 16]
//#define hBlur

varying vec2 texcoord;

uniform sampler2D gcolor;
uniform float viewWidth;

#include "/module/horizontal_blur.frag"

void main() {
	#ifdef hBlur
		vec3 blurred = hblur();
		gl_FragData[0] = vec4(blurred, 1);
	#else
		gl_FragData[0] = texture2D(gcolor, texcoord);
	#endif
}

