
#define colorDepth 6 // [1 3 6 8 12 15 18 24]
#define monoPalette 0 // [0 1 2]

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
	

