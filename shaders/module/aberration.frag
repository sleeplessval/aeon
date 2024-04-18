
vec2 caOffset = vec2(pixelSize / viewWidth, 0);

vec3 aberrate() {
	float red	= texture2D(gcolor, texcoord - caOffset).r;
	float blue	= texture2D(gcolor, texcoord + caOffset).b;

	return vec3(red, 0, blue);
}

