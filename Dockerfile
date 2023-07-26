# 基础镜像
FROM php:7.4-apache

# 设置工作目录
WORKDIR /var/www/html

# 安装依赖
RUN apt-get update && apt-get install -y \
    libzip-dev \
    && docker-php-ext-install zip

# 复制项目文件到容器中
COPY . /var/www/html

# 安装Composer依赖
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev

# 设置Apache配置
RUN a2enmod rewrite

# 启动Apache服务器
CMD ["apache2-foreground"]
