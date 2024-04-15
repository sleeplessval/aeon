#version 120

#define pixelSize // [1 2 4 8 16]
//#define hBlur

varying vec2 texcoord;

uniform sampler2D gcolor;
uniform float viewWidth;

#ifdef hBlur

vec2 neighbor = vec2(1 / viewWidth, 0);

float avg(float l, float c, float r) {
	return (l + c + r) / 3;
}

void main() {
	vec3 color = texture2D(gcolor, texcoord).rgb;

	vec2 left = texcoord - neighbor;
	vec2 right = texcoord + neighbor;
	vec3 lColor;
	if(left.x >= 0)
		lColor = texture2D(gcolor, left).rgb;
	else
		lColor = color;

	vec3 rColor;
	if(right.x <= viewWidth)
		rColor = texture2D(gcolor, right).rgb;
	else
		rColor = color;

	vec3 blurred = vec3(avg(lColor.r, color.r, rColor.r), avg(lColor.g, color.g, rColor.g), avg(lColor.b, color.b, rColor.b));
	gl_FragData[0] = vec4(blurred, 1);
}

#else

void main() {
	gl_FragData[0] = texture2D(gcolor, texcoord);
}

#endif

