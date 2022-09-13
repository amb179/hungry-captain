from django.db import models
from cloudinary.models import CloudinaryField
# from config.constants import *

# Create your models here.
CATEGORIES = (
    ('Hot', 'HOT'),
    ('Cold', 'COLD'),
    ('Bagel', 'BAGEL'),
    ('All', 'ALL')
)

STATUS = (
    ('Active', 'Active'),
    ('Inactive', 'Inactive')
)


class Item(models.Model):
    class Meta(object):
        db_table = 'item'

    status = models.CharField( 
        'Status', max_length=50, default='Inactive', choices=STATUS, blank=False, db_index=True
    )
    name = models.CharField( 
        'Name', max_length=200, blank=False, null=False, db_index=True
    )
    image = CloudinaryField(
        'Image', blank=False, null=False
    )
    like_count = models.IntegerField(
        'Like Count', blank=False, null=False, default=0
    )
    price = models.DecimalField(
        'Price', blank=False, null=False, decimal_places=2, max_digits=6
    )
    category = models.CharField(
        'Category', max_length=50, default='ALL', blank=False, null=False, choices=CATEGORIES
    )
    description = models.CharField(
        'description', blank=True, max_length=10000,  default='Item Description'
    )
    create_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    update_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )


