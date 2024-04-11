
//#define tWarp //	psx texture warp

void texture_warp() {
	gl_Position /= abs(gl_Position.w);
}

