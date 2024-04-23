
#define colorDepth 6 // [1 3 6 8 12 24]
#define monoPalette 0 // [0 1 2]

#if		colorDepth == 1
	vec3 colormax = vec3(2, 1, 1);
#elif	colorDepth == 3
	vec3 colormax = vec3(2, 2, 2);
#elif	colorDepth == 6
	//	6-bit is 2:2:2
	vec3 colormax = vec3(4, 4, 4);
#elif	colorDepth == 8
	//	8-bit is 3:3:2
	vec3 colormax = vec3(8, 8, 4);
#elif	colorDepth == 12
	//	12-bit is 4:4:4
	vec3 colormax = vec3(16, 16, 16);
#elif	colorDepth == 24
	//	24-bit is 8:8:8
	vec3 colormax = vec3(256, 256, 256);
#endif

#if		monoPalette == 0
	vec3 monoColor = vec3(1, 1, 1);
#elif	monoPalette == 1
	vec3 monoColor = vec3(0.48, 0.72, 0.28);
#elif	monoPalette == 2
	vec3 monoColor = vec3(1, 0, 0);
#endif
	

