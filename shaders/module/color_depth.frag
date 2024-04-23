
#define colorMode 0 // [0 1]

#define hueBits 2 // [1 2 3 4 5 6 7 8]
#define satBits 2 // [1 2 3 4 5 6 7 8]
#define valBits 2 // [1 2 3 4 5 6 7 8]

#define colorDepth 6 // [1 3 6 8 12 15 18 24]
#define monoPalette 0 // [0 1 2]

#if colorMode == 0
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

	#if		monoPalette == 0
		vec3 monoColor = vec3(1, 1, 1);
	#elif	monoPalette == 1
		vec3 monoColor = vec3(0.48, 0.72, 0.28);
	#elif	monoPalette == 2
		vec3 monoColor = vec3(1, 0, 0);
	#endif

#endif

