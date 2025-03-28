---
layout: default
title: Personal Notes
permalink: /notes/
---

<h1>Personal Notes</h1>

{% assign notes_by_field = site.notes | group_by_exp: "note", "note.path | split: '/' | slice: 1, 1 | join: '' " %}

<table class="notes-table">
  <thead>
      <tr>
          <th>Field</th>
          <th>Subfield</th>
          <th>Notes</th>
      </tr>
  </thead>
  <tbody>
      {% for field_group in notes_by_field %}
        {% assign subfields = field_group.items | group_by_exp: "note", "note.path | split: '/' | slice: 2, 1 | join: '' " %}
      {% for subfield_group in subfields %}
              <tr>
                  {% if forloop.first %}
                    <td rowspan="{{ subfields | size }}"><strong>{{ field_group.name | replace: "_", " " | capitalize }}</strong></td>
                  {% endif %}
                  <td>{{ subfield_group.name | replace: "_", " " | capitalize  }}</td>
                  <td>
                      <ul>
                        {% for note in subfield_group.items %}
                        <li> <a href="{{ note.url }}"> {{ note.title | default: note.name }} </a> </li>
                        {% endfor %}
                      </ul>
                  </td>
              </tr>
          {% endfor %}
      {% endfor %}
  </tbody>
</table>