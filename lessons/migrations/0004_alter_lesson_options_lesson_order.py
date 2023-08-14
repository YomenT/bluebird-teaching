# Generated by Django 4.2.2 on 2023-08-14 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0003_alter_lesson_completed'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lesson',
            options={'ordering': ['subset', 'order']},
        ),
        migrations.AddField(
            model_name='lesson',
            name='order',
            field=models.PositiveIntegerField(default=0),
        ),
    ]