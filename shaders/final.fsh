#version 120

#include "/module/common.glsl"

//#define aberration
//#define hBlur
//#define scanlines

varying vec2 texcoord;

uniform sampler2D gcolor;
uniform float viewWidth;

#include "/module/aberration.frag"
#include "/module/horizontal_blur.frag"

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

	#ifdef scanlines
		if(mod(int(gl_FragCoord.y / (pixelSize * 2)), 2) == 0)
			color.rgb *= 0.95;
		else
			color.rgb /= 0.95;
	#endif

	gl_FragData[0] = vec4(color, 1);
}

