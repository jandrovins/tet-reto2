# BookStore

En las carpetas frontend y backend está el desarrollo para el punto 2 del reto.

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

Teniendo los certificados digitales procedemos a configurar nginx para que use los certificados. Mostramos la sección "server" relevante:

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

