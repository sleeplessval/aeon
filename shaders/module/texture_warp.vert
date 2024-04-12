
//#define tWarp //	psx texture warp

void texture_warp() {
	#ifdef tWarp_mod
		gl_Position /= abs(gl_Position.w + tWarp_mod);
	#else
		gl_Position /= abs(gl_Position.w);
	#endif
}

