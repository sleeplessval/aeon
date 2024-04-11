//	"empty" fragment shader

varying vec2 texcoord;
varying vec4 color;
varying vec2 lmcoord;

uniform sampler2D texture;
uniform sampler2D lightmap;

void main() {
	vec4 final = texture2D(texture, texcoord) * color;
	final *= texture2D(lightmap, lmcoord);
	gl_FragData[0] = final;
}

