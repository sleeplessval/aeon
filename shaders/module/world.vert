
#include "/var/world.glsl"

#define worldCurvature 0 // [0 1 2]
#define worldRadius 512 // [1024 512 256 -256]

void world_curvature() {
	#if worldCurvature == CURVATURE_CYLINDER
		float z = gl_Position.z * gl_Position.z;
		gl_Position.y -= 2 * z / worldRadius;
	#elif worldCurvature == CURVATURE_ROUND
		vec2 xz = gl_Position.xz;
		gl_Position.y -= round(( dot(xz, xz) / worldRadius ) * 8) / 8;
	#endif
}

