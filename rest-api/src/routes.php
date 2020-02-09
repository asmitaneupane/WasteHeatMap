<?php

// get all users
    $app->get('/users', function ($request, $response, $args) {
         $sth = $this->db->prepare("SELECT * FROM user_table ORDER BY user_id");
        $sth->execute();
        $todos = $sth->fetchAll();
        return $this->response->withJson($todos);
    });
 
    // Retrieve user with id 
    $app->get('/user/[{user_id}]', function ($request, $response, $args) {
         
        $sth = $this->db->prepare("SELECT * FROM user_table WHERE user_id=:user_id");
        $sth->bindParam("user_id", $args['user_id']);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    }); 
        
 
    // Add a new user
    $app->post('/user', function ($request, $response) {
        $input = $request->getParsedBody();
        $sql = 'INSERT INTO user_table (first_name,last_name,address,contact,gender,email,pass_word,points) VALUES ("'.$input['first_name'].'","'.$input['last_name'].'","'.$input['address'].'","'.$input['contact'].'","'.$input['gender'].'","'.$input['email'].'","'.$input['pass_word'].'","'.$input['points'].'")';
        $sth = $this->db->prepare($sql);
         $sth->execute();
        $input['user_id'] = $this->db->lastInsertId();
        return $this->response->withJson($input);
    });
        
 
    // DELETE a user with given id
    $app->delete('/user/[{user_id}]', function ($request, $response, $args) {
         $sth = $this->db->prepare("DELETE FROM user_table WHERE user_id=:user_id");
        $sth->bindParam("user_id", $args['user_id']);
        $sth->execute();
        $todos = $sth->fetchAll();
        return $this->response->withJson($todos);
    });
 
    // Update user with given id
    $app->put('/user/[{user_id}]', function ($request, $response, $args) {
        $input = $request->getParsedBody();
        $sql = "UPDATE user_table SET user_id=:user_id WHERE user_id=:user_id";
         $sth = $this->db->prepare($sql);
        $sth->bindParam("user_id", $args['user_id']);
        $sth->bindParam("task", $input['task']);
        $sth->execute();
        $input['user_id'] = $args['user_id'];
        return $this->response->withJson($input);
    });









    // Retrieve all products
    $app->get('/products', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT * FROM product_table ORDER BY pro_id");
       $sth->execute();
       $todos = $sth->fetchAll();
       return $this->response->withJson($todos);
   });

   // Retrieve product with id 
   $app->get('/product/[{pro_id}]', function ($request, $response, $args) {
         
    $sth = $this->db->prepare("SELECT * FROM product_table WHERE pro_id=:pro_id");
    $sth->bindParam("pro_id", $args['pro_id']);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
}); 
    

// Add a new product
$app->post('/product', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = 'INSERT INTO product_table (pro_id,img_name,pro_title,pro_des,price) VALUES ("'.$input['pro_id'].'",
    "'.$input['img_name'].'","'.$input['pro_title'].'","'.$input['pro_des'].'","'.$input['price'].'")';
    $sth = $this->db->prepare($sql);
     $sth->execute();
    $input['pro_id'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});
    

// DELETE a product with given id
$app->delete('/product/[{pro_id}]', function ($request, $response, $args) {
     $sth = $this->db->prepare("DELETE FROM product_table WHERE pro_id=:pro_id");
    $sth->bindParam("pro_id", $args['pro_id']);
    $sth->execute();
    $todos = $sth->fetchAll();
    return $this->response->withJson($todos);
});

// Update product with given id
$app->put('/product/[{pro_id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE product_table SET pro_id=:pro_id WHERE pro_id=:pro_id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("pro_id", $args['pro_id']);
    $sth->bindParam("task", $input['task']);
    $sth->execute();
    $input['wm_id'] = $args['wm_id'];
    return $this->response->withJson($input);
});









 // Retrieve all wms
 $app->get('/wms', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM wm_table ORDER BY wm_id");
   $sth->execute();
   $todos = $sth->fetchAll();
   return $this->response->withJson($todos);
});

// Retrieve wm with id 
$app->get('/wm/[{wm_id}]', function ($request, $response, $args) {
     
$sth = $this->db->prepare("SELECT * FROM wm_table WHERE wm_id=:wm_id");
$sth->bindParam("wm_id", $args['wm_id']);
$sth->execute();
$todos = $sth->fetchObject();
return $this->response->withJson($todos);
}); 


// Add a new wm
$app->post('/wm', function ($request, $response) {
$input = $request->getParsedBody();
$sql = 'INSERT INTO wm_table (user_id,longitude,latitude,image) VALUES ("'.$input['user_id'].'","'.$input['longitude'].'","'.$input['address'].'",
"'.$input['latitude'].'","'.$input['image'].'")';
$sth = $this->db->prepare($sql);
$sth->execute();
$input['user_id'] = $this->db->lastInsertId();
return $this->response->withJson($input);
});


// DELETE a wm with given id
$app->delete('/wm/[{wm_id}]', function ($request, $response, $args) {
 $sth = $this->db->prepare("DELETE FROM wm_table WHERE wm_id=:wm_id");
$sth->bindParam("wm_id", $args['wm_id']);
$sth->execute();
$todos = $sth->fetchAll();
return $this->response->withJson($todos);
});

// Update wm with given id
$app->put('/wm/[{wm_id}]', function ($request, $response, $args) {
$input = $request->getParsedBody();
$sql = "UPDATE wm_table SET wm_id=:wm_id WHERE wm_id=:wm_id";
 $sth = $this->db->prepare($sql);
$sth->bindParam("wm_id", $args['wm_id']);
$sth->bindParam("task", $input['task']);
$sth->execute();
$input['wm_id'] = $args['wm_id'];
return $this->response->withJson($input);
});
