# Generated by Django 5.0.1 on 2024-04-02 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rawmaterialcategoriesmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='UnitsModel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'units',
            },
        ),
    ]
