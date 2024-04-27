
#include "/var/color_depth.glsl"

#define colorMode 0 // [0 1]

#define hueBits 2 // [1 2 3 4 5 6 7 8]
#define satBits 2 // [1 2 3 4 5 6 7 8]
#define valBits 2 // [1 2 3 4 5 6 7 8]

#define colorDepth 6 // [1 3 6 8 12 15 18 24]
#define monoPalette 0 // [0 1 2 3]

#if colorMode == MODE_HSV
	//	-- HSV --

	float bit_max(int bits) {
		return pow(2, bits);
	}

	float hueMax = bit_max(hueBits);
	float satMax = bit_max(satBits);
	float valMax = bit_max(valBits);

#else
	//	-- RGB --

	#if		colorDepth == 1
		vec3 colormax = vec3(2, 1, 1);
	#elif	colorDepth == 3
		vec3 colormax = vec3(2, 2, 2);
	#elif	colorDepth == 6
		vec3 colormax = vec3(4, 4, 4);
	#elif	colorDepth == 8
		//	8-bit is 3:3:2
		vec3 colormax = vec3(8, 8, 4);
	#elif	colorDepth == 12
		vec3 colormax = vec3(16, 16, 16);
	#elif	colorDepth == 15
		vec3 colormax = vec3(32, 32, 32);
	#elif	colorDepth == 18
		vec3 colormax = vec3(64, 64, 64);
	#elif	colorDepth == 24
		vec3 colormax = vec3(256, 256, 256);
	#endif

	#if		monoPalette == MONOCHROME_BW
		vec3 monoHigh	= vec3(1);
		vec3 monoLow	= vec3(0);
	#elif	monoPalette == MONOCHROME_DOTMATRIX
		vec3 monoHigh	= vec3(0.31, 0.40, 0.03);
		vec3 monoLow	= vec3(0.17, 0.29, 0.13);
	#elif	monoPalette == MONOCHROME_MOTIONSICK
		vec3 monoHigh	= vec3(1, 0, 0);
		vec3 monoLow	= vec3(0);
	#elif	monoPalette == MONOCHROME_NOIR
		vec3 monoHigh	= vec3(0.73, 0.67, 0.55);
		vec3 monoLow	= vec3(0.26, 0.23, 0.19);
	#endif

#endif

