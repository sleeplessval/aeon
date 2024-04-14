#if worldCurvature == 1
	float z = gl_Position.z * gl_Position.z;
	gl_Position.y -= z / 256;
#elif worldCurvature == 2
	vec2 xz = gl_Position.xz;
	gl_Position.y -= ceil(( dot(xz, xz) * 5 ) / 512) / 5;
#endif

