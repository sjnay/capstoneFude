# Generated by Django 4.1.2 on 2022-10-13 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fudeapp', '0003_alter_post_food_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='food_img',
            field=models.ImageField(max_length=500, upload_to='posts/'),
        ),
    ]
