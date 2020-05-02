using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorInputMask
{
    public class User
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [RegularExpression(@"^[0][1-9]([.][0-9][0-9]){4}", ErrorMessage="Numéro de téléphone incorrect!")]
        public string Telephone { get; set; }

    }
}
