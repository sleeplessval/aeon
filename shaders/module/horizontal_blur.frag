
vec2 neighborOffset = vec2(1 / viewWidth, 0);

float avg(float l, float c, float r) {
	return (l + c + r) / 3;
}

vec3 hblur() {
	vec3 center = texture2D(gcolor, texcoord).rgb;

	vec2 leftPos = texcoord - neighborOffset;
	vec2 rightPos = texcoord + neighborOffset;

	vec3 left;
	if(leftPos.x >= 0)
		left = texture2D(gcolor, leftPos).rgb;
	else
		left = center;

	vec3 right;
	if(rightPos.x >= 0)
		right = texture2D(gcolor, rightPos).rgb;
	else
		right = center;

	return vec3(avg(left.r, center.r, right.r), avg(left.g, center.g, right.g), avg(left.b, center.b, right.b));
}

