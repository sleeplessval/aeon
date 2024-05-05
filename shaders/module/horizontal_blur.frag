
vec2 neighborOffset = vec2(1 / viewWidth, 0);

float avg(float l, float c, float r) {
	return (l + c + r) / 3;
}

vec3 hblur() {
	vec3 center = texture2D(gcolor, texcoord).rgb;

	vec3 sum = vec3(0);
	int count = 0;
	for(int x = -2; x < 2; x++) {
		vec2 pos = texcoord - (neighborOffset * x);
		if(pos.x >= 0 && pos.x < viewWidth) {
			sum += texture2D(gcolor, pos).rgb;
			count++;
		}
	}

	return sum / count;
}

