# Reto 2

En las carpetas frontend y backend está el desarrollo para el punto 2 del reto.

# Instalación de certificados

## Instalación de dependencias

Se ejecutan los siguientes comandos

```
sudo wget -r --no-parent -A 'epel-release-*.rpm' https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*
sudo yum install -y certbot 
sudo yum install -y python-certbot-nginx
```
