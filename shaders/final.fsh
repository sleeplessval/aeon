#version 120

#include "/module/common.glsl"

//#define aberration
//#define hBlur

varying vec2 texcoord;

uniform sampler2D gcolor;
uniform float viewWidth;

#include "/module/aberration.frag"
#include "/module/horizontal_blur.frag"
#include "/module/scanline.frag"

void main() {
	vec3 color;
	#ifdef hBlur
		color = hblur();
	#else
		color = texture2D(gcolor, texcoord).rgb;
	#endif

	#ifdef aberration
		color.rb = aberrate().rb;
	#endif

	#if scanline > 0
		color = scanlines(color);
	#endif

	gl_FragData[0] = vec4(color, 1);
}

