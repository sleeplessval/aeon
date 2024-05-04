
vec2 caOffset = vec2(2 * pixelSize / viewWidth, 0);

vec3 aberrate(vec3 color) {
	vec2 offset	= caOffset * abs(cos(texcoord * 3.14));
	float red	= color.r;
	float blue	= color.b;

	return vec3(red, 0, blue);
}

