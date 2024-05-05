
#include "/var/scanline.glsl"

#define scanline 0 // [0 1 2]

vec3 scanlines(vec3 color) {
	#if		scanline == SCANLINE_SOFT
		if(mod(int(gl_FragCoord.y / pixelSize * 2), 2) == 0)
			color.rgb *= 0.95;
		else
			color.rgb /= 0.95;
	#elif	scanline == SCANLINE_HARD
		if(mod(int(gl_FragCoord.y / pixelSize), 2) == 0)
			color.rgb *= 0.5;
	#endif
	return color;
}
