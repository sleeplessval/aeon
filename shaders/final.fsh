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
#include "/module/signal.frag"

void main() {
	vec3 color;


	//	software post-processing effects
	#ifdef hBlur
		color = hblur();
	#else
		color = texture2D(gcolor, texcoord).rgb;
	#endif

	#if scanline > 0
		color = scanlines(color);
	#endif

	//	hardware post-processing effects
	#if		signal == SIGNAL_NTSC
		color = ntsc(color);
	#elif	signal == SIGNAL_PAL
		color = pal(color);
	#endif

	//	physical post-processing effects
	#ifdef aberration
		color.rb = aberrate().rb;
	#endif


	gl_FragData[0] = vec4(color, 1);
}

