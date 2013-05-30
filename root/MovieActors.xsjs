function doResponse(code,body,mimetype){    if(!mimetype){       mimetype="text/plain";    }    if(body){       $.response.setBody(body);        }    $.response.contentType=mimetype;    $.response.status=code;}var film_id = $.request.parameters.get("film_id");var conn = $.db.getConnection();var pstmt,rs;var dbname,host,starttime,version;
pstmt = conn.prepareStatement( "select a.name, a.date_of_birth, a.place_of_birth from movies.actors as a join movies.starring as m on a.actor_id = m.actor_id where m.film_id=?" );pstmt.setString(1,film_id);rs = pstmt.executeQuery();
var result=[],block;
while(rs.next()){
	block = rs.getString(1);	result.push(block);}  
rs.close();pstmt.close();  conn.close();doResponse(200,JSON.stringify(result),"application/json");