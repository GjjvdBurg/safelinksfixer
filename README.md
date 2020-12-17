Outlook wraps URLS in emails so that they go through their URL "protection"
scheme, called [ATP Safe Links](https://support.office.com/en-us/article/office-365-atp-safe-links-dd6a1fef-ec4a-4cf4-a25a-bb591c5811e3#atpforemail).

This makes URLs in emails very long and it makes it more difficult to see 
where they point to. This addon replaces the SafeLink URL with a direct link, 
thereby bypassing the URL protection (and possible tracking). 

In other words, it replaces this:

```
https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2FGjjvdBurg&data=04%7C01%7Cemail%40example.com%7Ca345c0167657405967a608d897138493%7C4395f4a7e4554f958a9f1fbaef6384f9%7C0%7C0%7C637425457374826327%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=JHdxmGm5Y7%2FmDfAJE7tO80cZ3Ty3%2BC9E8i2NUFusEa0%3D&reserved=0
```

with this:

```
https://github.com/GjjvdBurg
```

This code is based on the 
[SmileyFixer](https://addons.mozilla.org/en-GB/thunderbird/addon/smiley-fixer/) 
Thunderbird Addon.

Installation instructions
-------------------------

Clone the repository locally then run `make`

    $ git clone https://github.com/GjjvdBurg/safelinksfixer.git
    $ cd safelinksfixer
    $ make

Install the resulting xpi file in Thunderbird 3+ from the Add-ons menu
option.

License
-------

All code is covered by the Apache version 2.0 license.

http://www.apache.org/licenses/LICENSE-2.0.html
