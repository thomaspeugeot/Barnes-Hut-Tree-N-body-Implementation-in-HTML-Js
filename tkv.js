// TKV put body back in box
function resetPointInBBOX(i,BBOX) {
	if (bods.pos.x[i] < BBOX[0]) { bods.vel.x[i] *= -1; bods.pos.x[i] = BBOX[0] - (bods.pos.x[i] - BBOX[0]); }
	if (bods.pos.y[i] < BBOX[1]) { bods.vel.y[i] *= -1; bods.pos.y[i] = BBOX[1] - (bods.pos.y[i] - BBOX[1]); }
	if (bods.pos.x[i] > BBOX[2]) { bods.vel.x[i] *= -1; bods.pos.x[i] = BBOX[2] - (bods.pos.x[i] - BBOX[2]); }
	if (bods.pos.y[i] > BBOX[3]) { bods.vel.y[i] *= -1; bods.pos.y[i] = BBOX[3] - (bods.pos.y[i] - BBOX[3]); }
}
// TKV distance between point (as on a circle)
function getXModuloDist(x,x2) {
	var modulo = bnRoot.box[2]/2;
	var dist = x2-x;
	
	if (dist > modulo) 
		dist -= 2*modulo;
	if (dist < -modulo) 
		dist += 2*modulo;

	return dist;
}

// TKV distance between point (as on a circle)
function getYModuloDist(y,y2) {
	var modulo = bnRoot.box[3]/2;
	var dist = y2-y;
	
	if (dist > modulo) 
		dist -= 2*modulo;
	if (dist < -modulo) 
		dist += 2*modulo;

	return dist;
}