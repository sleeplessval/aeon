
//#define dof
#define dofRes

uniform float centerDepthSmooth;
uniform sampler2D depthtex1;

const float centerDepthSmoothHalfLife = 16f;

vec2 depthOfField() {
	float depth = texture2D(depthtex1, texcoord).x;
	float distance = depth - centerDepthSmooth;
	int stops = max(min(int(sqrt(distance * 256)), 5), 0);

	#if pixelSize > 1
		float virtualSize = pow(float(pixelSize), 1 + stops);
	#else
		float virtualSize = pow(2f, stops);
	#endif
	vec2 view = vec2(viewWidth, viewHeight) / virtualSize;
	float offset = (ceil(virtualSize * 0.5) - 0.5) / virtualSize;

	#ifdef dofRes
		renderRes = virtualSize;
	#endif
	return (floor(texcoord * view) + offset) / view;
}

