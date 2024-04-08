#version 120

varying vec2 texcoord;
varying vec4 color;

uniform sampler2D texture;

void main() {
	vec4 final = texture2D(texture, texcoord) * color;
	gl_FragData[0] = final;
}

