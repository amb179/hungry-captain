from django.db import models
from apps.items.models import Item

# Create your models here.

RATING = (
    ('Good', 'GOOD'),
    ('Very Good', 'VERY GOOD'),
    ('Excellent', 'EXCELLENT'),
    ('Not Good', 'NOT GOOD')
)

class Review(models.Model):

    class Meta(object):
        db_table = 'review'

    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, db_index=True,
    )
    rate = models.CharField( 
        'Rate', max_length=200, choices=RATING, blank=False
    )
    name = models.CharField( 
        'Name', max_length=300, blank=False, null=False, db_index=True
    )
    body = models.CharField( 
        'Body', max_length=1200, blank=False, null=False, db_index=True
    )
    like_count = models.IntegerField(
        'Like Count', blank=False, null=False, default=0
    )
    create_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    update_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )