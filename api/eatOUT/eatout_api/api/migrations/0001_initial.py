# Generated by Django 4.1.1 on 2022-10-03 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False)),
                ('RestName', models.CharField(max_length=45)),
                ('location', models.CharField(max_length=45)),
                ('telephone', models.IntegerField()),
                ('descrip', models.CharField(max_length=200)),
            ],
        ),
    ]
