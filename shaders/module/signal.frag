
#include "/var/signal.glsl"

#define signal 0 // [0 1]

vec3 ntsc(vec3 color) {
	//	convert to YIQ
	float y = dot(color, vec3(0.299, 0.587, 0.114));
	float i = dot(color, vec3(0.596, -.274, -.322));
	float q = dot(color, vec3(0.211, -.523, 0.312));

	//	faux ntsc signal
	float carrier = 6.283 * 3.570 * gl_FragCoord.x;
	float phase = sin(carrier) * i + cos(carrier) * q;
	float quad = cos(carrier) * i - sin(carrier) * q;

	//	decode faux signal
	i = quad * cos(carrier);
	q = phase * sin(carrier);

	//	convert back to RGB
	vec3 yiqColor = vec3(y, i, q);

	vec3 outColor = vec3(0);
	outColor.r = dot(yiqColor, vec3(1, 0.956, 0.619));
	outColor.g = dot(yiqColor, vec3(1, -.272, -.674));
	outColor.b = dot(yiqColor, vec3(1, -1.106, 1.703));

	return outColor;
}

