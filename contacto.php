<?php include 'header.php'; ?>
    <div class="acercadeimg">
        <img src="img/sitio/contacto.png" alt="" width="100%"/>
    </div>
    <div class="row mobileacerca visible-xs"></div>
    <div class="container acercade">

        <div class="row">
            <div class="col-xs-12 col-sm-5 acercadecont">

                <h2 class="blue" align="center">CONTACTO</h2>







                <form method="post" action="contacto.php">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Nombre" name="name" required="required">
                    </div>
                    <div class="form-group">
                        <label for="empresa">Empresa </label>
                        <input type="text" class="form-control" id="empresa" placeholder="Empresa / Hospital / Clínica" name="empresa">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" required="required">
                    </div>
                    <div class="form-group">
                        <label for="comentarios">Comentarios</label>
                        <textarea id="comentarios" class="form-control" name="message" required="required"></textarea>
                    </div>
                    <div class="form-group">
                        <div class=" col-xs-12 col-sm-8 col-sm-offset-2">
                            <input type="submit" id="send" class="btn btn-primary btn-block" value="Enviar mensaje"/>
                            <?php
                            if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
                                $email_to = "saray.gutierrez@outlook.com";
                                $email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
                                if(!isset($_POST['name']) ||
                                    !isset($_POST['empresa']) ||
                                    !isset($_POST['email']) ||

                                    !isset($_POST['message'])) {

                                    echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
                                    echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
                                    die();
                                }

                                $email_message = "Detalles del formulario de contacto:\n\n";
                                $email_message .= "Nombre: " . $_POST['name'] . "\n";
                                $email_message .= "Empresa: " . $_POST['empresa'] . "\n";
                                $email_message .= "E-mail: " . $_POST['email'] . "\n";

                                $email_message .= "Comentarios: " . $_POST['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
                                $headers = 'From: '.$email_from."\r\n".
                                    'Reply-To: '.$email_from."\r\n" .
                                    'X-Mailer: PHP/' . phpversion();
                                @mail($email_to, $email_subject, $email_message, $headers);

                                echo "¡El formulario se ha enviado con éxito!";
                            }
                            ?>

                        </div>

                    </div>
                </form>
            </div>
            <div class="col-xs-12 col-sm-7 acercadecont">
                <h2 class="blue" align="center">DIRECCIÓN</h2>

                <div class="direccion">
                    <br/>

                    <p><strong>Oficinas Centrales</strong></p>

                    <p>Calle Abasolo No.3<br/>
                        Ozumbilla, Tecámac, Estado de México<br/>
                        C.P. 55760
                    </p>

                    <p><strong>Teléfonos</strong></p>

                    <p><strong>Oficina: </strong>01-55-54-41-27-48<br/>
                        <strong>Fax: </strong>
                        57-31-13-33</p>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="container">
        <div class="col-xs-12">
            <h2 class="blue" align="center">UBICACIÓN</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7513.554488075268!2d-98.99776557485815!3d19.679506647118178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ed772ebebfbb%3A0x37190c3db8dcb66b!2sMariano+Abasolo%2C+55760+Ojo+de+Agua%2C+MEX!5e0!3m2!1ses!2smx!4v1406695342452"
                width="100%" height="450" frameborder="0" style="border:0"></iframe>
        </div>
    </div>
<?php include 'footer.php'; ?>



