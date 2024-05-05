
#include "/var/signal.glsl"

#define signal 0 // [0 1 2]
#define wire 0 // [0 1]

float luminance(vec3 color) {
	return dot(color, vec3(0.299, 0.587, 0.114));
}

vec3 ntsc(vec3 color) {
	//	convert to YIQ
	float y = luminance(color);
	float i = dot(color, vec3(0.596, -.274, -.322));
	float q = dot(color, vec3(0.211, -.523, 0.312));

	//	faux ntsc signal
	float carrier = 6.283 * 3.570 * gl_FragCoord.x;		//	2π * 3.57MHz * x
	float phase = sin(carrier) * i + cos(carrier) * q;
	float quad = cos(carrier) * i - sin(carrier) * q;

	//	decode faux signal
	#if		wire == WIRE_COMPOSITE
		float composite = phase + (y * 5.500);			//	p + (y * 5.5MHz)
		y = round(composite * 5.500) / 30.250;
		phase = composite - quad - (y * 5.500);
		quad = composite - phase - (y * 5.500);
	#endif
	i = quad * cos(carrier);
	q = phase * sin(carrier);

	//	convert back to RGB
	vec3 yiqColor = vec3(y, i, q);

	float r = dot(yiqColor, vec3(1, 0.956, 0.619));
	float g = dot(yiqColor, vec3(1, -.272, -.674));
	float b = dot(yiqColor, vec3(1, -1.106, 1.703));

	return vec3(r, g, b).rgb;
}

vec3 pal(vec3 color) {
	//	convert to YUV
	float y = luminance(color);
	float u = 0.492 * (color.b - y);
	float v = 0.877 * (color.r - y);

	//	faux pal signal
	float carrier = 6.283 * 4.434;
	float phase = sin(carrier) * u - cos(carrier) * v;
	float quad = cos(carrier) * u - sin(carrier) * v;

	//	decode faux signal
	#if		wire == WIRE_COMPOSITE
		float composite = y + phase;
	#endif
	u = quad * cos(carrier);
	v = phase * sin(carrier);

	//	convert back to RGB
	vec3 yuvColor = vec3(y, u, v);

	float r = y + (1.140 * v);
	float g = y - (0.395 * u) - (0.581 * v);
	float b = y + (2.033 * u);

	return vec3(r, g, b).rgb;
}

