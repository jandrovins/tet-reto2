# BookStore

Se crearon 2 contenedores (uno para frontend y otro backend); el frontend es un contenedor que tiene un servidor nginx con el contenido estático de la página. El nginx tiene implementado HTTPS, y usa un reversed proxy para acceder al backend de la misma máquina (en distinto contenedor). El contenedor backend está basado en una imagen de nodejs, y ejecuta el "server.js" del backend.

En cada carpeta de frontend y backend hay un Dockerfile que define la imagen de cada contenedor.

# Instalación de certificados

Se usó freenom para crear un dominio y crear los records "A" para enlazar mi dominio con mi IP: vincent-tet-reto2.tk.

Se usó Certbot para implementar HTTPS con LetsEncrypt.

## Instalación de dependencias

Se ejecutan los siguientes comandos.

```
sudo wget -r --no-parent -A 'epel-release-*.rpm' https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*
sudo yum install -y certbot 
sudo yum install -y python-certbot-nginx
```

Luego se ejecuta Certbot para crear los certificados.

```
sudo certbot certonly --standalone --debug -d vincent-tet-reto2.tk
```

Los archivos ".pem" creados no los subimos al repo por temas de seguridad. Teniendo los certificados digitales procedemos a configurar nginx para que use los certificados. Mostramos la sección "server" relevante (archivo completo en directorio frontend):

```
    server {
        listen       443 ssl http2 default_server;
        listen       [::]:443 ssl http2 default_server;
        server_name  _;
        root         /BookStore-frontend;

        ssl_certificate "/etc/letsencrypt/live/vincent-tet-reto2.tk/fullchain.pem";
        ssl_certificate_key "/etc/letsencrypt/live/vincent-tet-reto2.tk/privkey.pem";
        #ssl_protocols TLSv1.2 TLSv1.3;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;
        #ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        location /api/books{
            proxy_pass http://backend;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```

# Para ejecutarlos

Se crean los contenedores con los comandos:

```
sudo docker run -dit -p 80:80 -p 443:443 --name frontend1 bookstore-frontend
sudo docker run -dit --name back1 -p 5000:5000 backend-tet
```
