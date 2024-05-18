
vec2 caOffset = vec2(2 * pixelSize / viewWidth, 0);

vec3 aberrate() {
	vec2 offset	= caOffset * cos(texcoord * 3.14);
	float red	= texture2D(gcolor, texcoord + offset).r;
	float blue	= texture2D(gcolor, texcoord - offset).b;

	return vec3(red, 0, blue);
}

