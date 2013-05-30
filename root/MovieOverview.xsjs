function doResponse(code,body,mimetype){
    if(!mimetype){
       mimetype="text/plain";
    }
    if(body){
       $.response.setBody(body);    
    }
    $.response.contentType=mimetype;
    $.response.status=code;
}

var conn = $.db.getConnection();
var pstmt,rs;
var dbname,host,starttime,version;
pstmt = conn.prepareStatement( "select f.film_id, f.name, d.name, f.estimated_budget, f.gross_revenue from movies.films as f inner join movies.directed_by as B on b.film_id = f.film_id inner join movies.directors as d on d.director_id = b.director_id where f.year = 2013 and f.gross_revenue > 0" );
rs = pstmt.executeQuery();
var result=[],file;

while(rs.next()){

    file ={
		name:rs.getString(2),
        director:rs.getString(3),
		budget:rs.getInteger(4),
		revenue:rs.getInteger(5),
		film_id:rs.getString(1)
	};
    
    result.push(file);
    
}  
rs.close();
pstmt.close();  
conn.close();

doResponse(200,JSON.stringify(result),"application/json");