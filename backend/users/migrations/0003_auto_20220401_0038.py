# Generated by Django 2.2.26 on 2022-04-01 00:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20220210_1622'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='testField2',
            new_name='testField3',
        ),
    ]
