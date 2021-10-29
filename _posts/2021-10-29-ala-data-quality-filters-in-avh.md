---
layout: post
title: "ALA data quality filters in AVH"
categories:
  - News
  - Feature
thumbnail: /media/2021/10/29/dq-filters-2.jpg
hero: /media/2021/10/29/dq-filters-2.jpg
---

In response to the Community Consultation that was carried out in early 2019,
ALA identified data quality as one of the key areas that it needed to work on.
The first stage in the Data Quality Project created a set of filters that
remove records that are most likely to be of poor quality or not fit-for-purpose
from search results. These Data Quality Filters have been available in the
[BioCache](https://biocache.ala.org.au) for a while and are now also available
in AVH.

In AVH, Data Quality Filters are disabled by default, but you can enable them by
selecting a Data Quality Profile from the drop-down.

{% include figure.html
    src="/media/2021/10/29/dq-filters-1.jpg"
    alt="Select a data quality profile"
    caption="Select a data quality profile."
%}

We have created an AVH Data Quality Profile, based on the ALA General Profile,
which excludes some filters that are not as relevant to AVH data and includes
extra filters on uncertain identifications and cultivated occurrences that are
especially relevant to AVH users.

{% include figure.html
    src="/media/2021/10/29/dq-filters-2.jpg"
    alt="AVH data quality profile"
    caption="The AVH data quality profile."
%}

As you can see, applying the AVH data quality profile removes almost 800,000 of
almost seven million records of a search for all records in AVH, mostly because
of the coordinate uncertainty (> 10,000 m), but also a fair amount because of
issues with the scientific name, uncertain identifications and cultivated
occurrences.

One of the nice things about the DQ filters is that you can also see the the records that have been excluded from the search result by a certain filter by following the link under the number of records excluded by that filter. So, users can see if records have been excluded that they do not want to exclude, in which case they can fine-tune the filters.

Disabling and enabling individual filter categories within a profile can be done by clicking the check boxes in front of the label. The same can be done in the 'Filter selection' dialog, which is opened by clicking on the 'Select filters' link at the top of the 'Data Profile' box and allows for even further fine-tuning.

{% include figure.html
    src="/media/2021/10/29/dq-filters-3.jpg"
    alt="Filter selection dialogue"
    caption="Filter selection dialogue."
%}

Clicking on the 'Expand and edit filters' link for a filter category – and then 'Apply' – will bring up a 'User selected filters' box below the 'Data Profile' box. Here a user can turn off individual filters.

{% include figure.html
    src="/media/2021/10/29/dq-filters-4.jpg"
    alt="Fine-tuning filters"
    caption="Fine-tuning filters."
%}

Another great thing about the data quality filters is the documentation. Clicking on the info symbols for the profile and the filter categories will tell you exactly which filters have been applied and why records have been excluded.

{% include figure.html
    src="/media/2021/10/29/dq-filters-5.jpg"
    alt="Information for the spatial issues filters"
    caption="Information for the spatial issues filters."
%}

The links in the 'Further information' column of the tables go to pages on the Data Quality Wiki (in GitHub) with more information about the terms or data quality tests. The pages for the data quality tests contain information for end users as what failing the test means for their data, as well as recommendations for curators of data on how to improve their data (if any action is recommended at all).

There is more to come from the ALA Data Quality project. The next stage, which will look into annotations and expert species distributions, is about to kick
off.
