# Generated by Django 3.2.6 on 2022-01-22 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produits', '0013_auto_20211021_1914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produit',
            name='prix_achat',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='produit',
            name='prix_vente',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
