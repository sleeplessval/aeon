
//#define dof

uniform float centerDepthSmooth;
uniform sampler2D depthtex1;

const float centerDepthSmoothHalfLife = 16f;

vec2 depthOfField() {
	float depth = texture2D(depthtex1, texcoord).x;
	float distance = depth - centerDepthSmooth;
	int stops = min(int(distance * 96), 5);

	float virtualSize = pow(float(pixelSize), 1 + stops);//1 + stops);
	vec2 view = vec2(viewWidth, viewHeight) / virtualSize;
	float offset = (ceil(virtualSize * 0.5) - 0.5) / virtualSize;
	return (floor(texcoord * view) + offset) / view;
}

